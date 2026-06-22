

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

 // experimental:{
   // turbo: false,
 // },

  images: {
    remotePatterns:[{
      protocol: 'https',
      hostname: 'lh3.googleusercontent.com',
      port: '',
      pathname: '/**'
      
    }]
  }
};

export default nextConfig;
