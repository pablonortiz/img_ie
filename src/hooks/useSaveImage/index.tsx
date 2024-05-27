import RNFetchBlob from 'rn-fetch-blob';
import {Platform} from 'react-native';

const useSaveImage = () => {
  const saveImage = async (imgUrl: string) => {
    let newImgUri = imgUrl.lastIndexOf('/');
    let imageName = imgUrl.substring(newImgUri);

    const dirs = RNFetchBlob.fs.dirs;
    const path = Platform.OS === 'ios' ? dirs.MainBundleDir + imageName : dirs.PictureDir + imageName;

    RNFetchBlob.config({
      fileCache: true,
      appendExt: 'png',
      indicator: true,
      IOSBackgroundTask: true,
      path: path,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: path,
        description: 'Image',
      },
    })
      .fetch('GET', imgUrl)
      .then(res => {
        console.log(res, 'end downloaded');
      })
      .catch(err => console.log(err));
  };

  return {saveImage};
};

export default useSaveImage;
