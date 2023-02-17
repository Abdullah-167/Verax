const protectAPI = (handler: any) => {
  return async (req: any, res: any) => {
    try {
      if (
        new URL(req.headers.referer).origin !== "http://localhost:3000" &&
        new URL(req.headers.referer).origin !== "https://verax.netlify.app" &&
        new URL(req.headers.referer).origin !== "https://veraxworldnft.com" &&
        new URL(req.headers.referer).origin !== "https://www.veraxworldnft.com"
      ) {
        return res
          .status(403)
          .json({ success: false, message: `Forbidden Access` });
      }
      return handler(req, res);
    } catch {
      return res
        .status(403)
        .json({ success: false, message: `Forbidden Access` });
    }
  };
};

export default protectAPI;
