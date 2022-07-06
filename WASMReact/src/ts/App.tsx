import { FC } from 'react';
import { createFFmpeg, fetchFile } from  '@ffmpeg/ffmpeg';
import { useState } from 'react';
import { useEffect } from 'react';

// Create an instance with logging to true so we can see what is going on in the browser console
const ffmpeg = createFFmpeg({ log: true });

const App: FC = () => {
  const [ready, setReady] = useState<boolean>(false);
  const [video, setVideo] = useState<File | null>(null);
  const [gif, setGif] = useState<string | null>(null);

  const load = async (): Promise<void> => {
    // Load the binairy separatly so our app is a bit more performant
    await ffmpeg.load();
    setReady(true);
  }

  const convertToGif = async (): Promise<void> => {
    if (!video) return;

    // Write the file to memory
    ffmpeg.FS('writeFile', 'test.mp4', await fetchFile(video));

    // Run the FFMpeg command (since this is a command line tool after all :P )
    // Basically we are running: ffmpeg -i test.mp4 -t 2.5s -ss 2.0 -f gif out.gif
    await ffmpeg.run('-i', 'test.mp4', '-t', '2.5s', '-ss', '2.0', '-f', 'gif', 'out.gif');

    // Read the file from memory
    const data = ffmpeg.FS('readFile', 'out.gif');

    // Create the URL so we can use this to display the gif
    const url = URL.createObjectURL(new Blob([data.buffer], { type: 'image/gif' }));
    setGif(url);
  }

  useEffect(() => {
    load();
  }, [])

  return ready ? (
    <div>
      {video && <video controls width="250" src={URL.createObjectURL(video)} />}
      <input type={"file"} onChange={e => setVideo(e.target.files?.item(0) || null)} />
      <button onClick={convertToGif}>Convert</button>
      {gif && (
        <>
          <h3>Result</h3>
          <img src={gif} alt="gif" width="250" />
        </>
      )}
    </div>
  ) : (
    <p>Loading...</p>
  )
};

export default App;
