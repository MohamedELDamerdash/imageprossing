import express , {Request, request ,Response,response, Router} from 'express';
import path from 'path';
import { pathExists } from 'fs-extra';
import resize from '.././api/size';

const rz = Router();

rz.get('/', (req: Request, res: Response) => {
  const hi = req.query.height as string;
  const wi = req.query.width as string;
  const name = req.query.name as string;
  const oimg = path.resolve('./') + `/assets/${name}.png`;
  const nimg = path.resolve('./') + `/resized/${name}_${hi}_${wi}.png`;

  (async function fun() {
    try {
      if (!isFinite(parseInt(wi)) || !isFinite(parseInt(hi))) {
        return res.status(400).send('the width or the height vaild');
      }
      const width = parseInt(wi),
        height = parseInt(hi);

      if (await pathExists(nimg)) {
        return res.status(200).sendFile(nimg);
      } else {
        await resize(oimg, height, width, nimg);

        return res.status(200).sendFile(nimg);
      }
    } catch {
      return res.status(404).send('image doesn\'t exist');
    }
  })();
});
export default rz;
