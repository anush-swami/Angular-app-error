In this angular application first, there is an all-region view than when one region is clicked then all the countries of that particular region is displayed. The application is working fine except at one point, When I open the all countries view it is loading all the countries but sometimes in that particular view some countries are loaded and some not (For example, if there are 30 countries in a particular view than 8 countries are loaded and others are not loaded) I am attaching the screenshot to make more clear what error I am facing. 

In console I'm getting this message - 

ERROR TypeError: Cannot read property 'outlets' of null
    at createNewSegmentGroup (router.js:2549)
    at updateSegmentGroup (router.js:2496)
    at router.js:2508
    at forEach (router.js:701)
    at updateSegmentGroupChildren (router.js:2506)
    at createUrlTree (router.js:2333)
    
I searched over the internet and I found that this error is because in view all countries path I am loading the allcountriescomponent also on currency and language filter also I am calling the allcountriescomponent.... So when I open the path of allcountries view than currency and language filter becomes null.

