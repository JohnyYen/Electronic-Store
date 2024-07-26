import fs from 'fs'

export function  renameImage(file){
    const newPath = `public/uploads/${file.originalname}`;
    fs.renameSync(file.path,newPath);
    return newPath;
}