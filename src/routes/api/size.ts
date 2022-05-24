import sharp from 'sharp';

const size = async(
    oimg : string,
    height : number|null,
    width : number|null,
    nimg :string
) =>{
    if (oimg == null || height ==null || width==null){
        return 'parmater is vaild';
    }
    await sharp(oimg)
    .png()
    .resize({height :height , width : width})
    .toFile(nimg);
};
export default size;