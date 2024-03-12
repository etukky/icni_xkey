const genId1 = require('eoyd_xid');
const genId2 = require('wbtq_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|EP2L3xLa4I|' + genId2()).digest('base64');
}


module.exports = generateKey;
