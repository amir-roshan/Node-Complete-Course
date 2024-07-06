import { fileURLToPath } from 'url';
import { dirname } from 'path';

// import.meta.url
const getCurrentDirname = (metaUrl) => {
    try {
        const filename = fileURLToPath(metaUrl);
        return dirname(filename);
    } catch (error) {
        console.log(error);
    }
};

export default getCurrentDirname;