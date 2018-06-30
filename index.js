const { totp } = require('notp')
const base32 = require('thirty-two')

class Opskins2fa {
	constructor(secret) {
		secret = secret.replace(/ /g, '')
		if(!secret.match(/[A-Z0-9]{16}/)) throw 'Cannot match your secret key'

		this.secret = secret.match(/[A-Z0-9]{16}/)[0]
	}

	code() {
		return totp.gen(base32.decode(this.secret))
	}
}

module.exports = Opskins2fa