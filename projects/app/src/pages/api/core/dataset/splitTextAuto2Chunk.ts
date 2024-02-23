import type { NextApiRequest, NextApiResponse } from 'next';
import { jsonRes } from '@fastgpt/service/common/response';
import { splitText2Chunks } from '@fastgpt/global/common/string/textSplitter';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const { text, chunkLen, overlapRatio, customReg } = req.body;
    const chunks = splitText2Chunks({text, chunkLen, overlapRatio, customReg});
    jsonRes(res, { data: chunks });
  } catch (err) {
    jsonRes(res, {
      code: 500,
      error: err
    });
  }
}
