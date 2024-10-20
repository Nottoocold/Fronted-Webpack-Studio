// This loader is used to remove all console.log() or console.debug() statements from the code.
function cleanLogLoader(content){
    return content.replace(/console\.log\(.*\)/g, '').replace(/console\.debug\(.*\)/g, '');
}

module.exports = cleanLogLoader;