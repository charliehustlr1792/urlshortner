import getShortUrl from "../dao/shorturl.js";
import {createShortUrlWithoutUser} from "../services/shorturl.service.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShortUrl = wrapAsync(async (req, res) => {
    const { url } = req.body;
    const shortUrl = await createShortUrlWithoutUser(url);
    res.send(process.env.APP_URL+shortUrl);
})

export const redirectFromShortUrl = wrapAsync(async (req,res) =>{
    const {id} =req.params;
    const url = await getShortUrl(id);
    if(!url) throw new Error("Short Url not found");
    res.redirect(url.fullurl);
})