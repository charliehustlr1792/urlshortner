import generateNanoId from "../utils/helper.js";
import shortUrlSchema from "../models/shorturl.model.js";
import saveShortUrl from "../dao/shorturl.dao.js";

export const createShortUrlWithoutUser=async(url)=>{
    const shortUrl =await generateNanoId(7);
    await saveShortUrl(shortUrl, url);
    return shortUrl;
}

export const createShortUrlWithUser=async(url,userId)=>{
    const shortUrl = await generateNanoId(7);
    await saveShortUrl(shortUrl, url, userId);
    return shortUrl;
}