/**
 * @param {string[]} paths
 * @return {string[][]}
 * 
 * 
 * Given a list paths of directory info, including the directory path, and all the files with contents in this directory, return all the duplicate files in the file system in terms of their paths. You may return the answer in any order.

A group of duplicate files consists of at least two files that have the same content.

A single directory info string in the input list has the following format:

"root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ... fn.txt(fn_content)"
It means there are n files (f1.txt, f2.txt ... fn.txt) with content (f1_content, f2_content ... fn_content) respectively in the directory "root/d1/d2/.../dm". Note that n >= 1 and m >= 0. If m = 0, it means the directory is just the root directory.

The output is a list of groups of duplicate file paths. For each group, it contains all the file paths of the files that have the same content. A file path is a string that has the following format:

"directory_path/file_name.txt"

 */
var findDuplicate = function(paths) {
    
    let n = paths.length
    let hashmap = {}
    
    //Iterate over all paths
    for(let i=0;i<n;i++){
        
        let files = paths[i].split(' ')
        let m = files.length 
        let path =(files[0].indexOf("root") != -1)? files[0] : "root"
        let j = (files[0].indexOf("root")!= -1)? 1 : 0
        //Iterate over list of files in folder
        
        for(let f=j;f<m;f++){
            //console.log(files[f])
            let content = files[f].split("(").pop().split(")")[0]
            let filename =files[f].split("(")[0]
            let completePath = path+'/' + filename
            
            if(hashmap.hasOwnProperty(content)){
                    hashmap[content].push(completePath)
               
               }else{
                   hashmap[content] = []
                   hashmap[content].push(completePath)
                
            }        
            
        }

        
        
    }
        //console.log(hashmap)
        let output = []
        for(let key in hashmap){
            
            if(hashmap[key].length > 1){
                output.push(hashmap[key])
            }
            
        }
        
        return output
    
};