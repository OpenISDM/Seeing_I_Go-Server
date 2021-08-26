var getResourcePath = (isBeta)=>{
    if(isBeta) return '/AppResources/Beta/'
    return '/AppResources/'
}

export default {
    getMetaDataPath: () => ({
        
    }),

    getFDFilePath: (graphName, language, isBeta = false) => ({

    }),

    getInfoFilePath: (graphName, language, isBeta = false) => ({

    }),

    getNavigationGraphPath: (graphName, language, isBeta = false) => ({

    }),
    getPicturePath : (pictureName, isBeta = false)=>({

    }),
}