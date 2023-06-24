// Preload config
import config from 'config';
const runBoot = async () => {
  console.log('runBoot: ', config.get("Title"));
}

export default runBoot;