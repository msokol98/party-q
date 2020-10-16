export const apiHost = 
    process.env.NODE_ENV === "development" ? "http://localhost:8080" : "http://3.136.106.200:8080";

export const oauthHost = 
    process.env.NODE_ENV === "development" ? "http://localhost:8888" : "http://3.136.106.200:8888";
