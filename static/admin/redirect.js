if(typeof window !== 'undefined'){
	var hash = '#' + (window.location.hash || '').replace(/##/, '#')
	if(hash.indexOf('confirmation_token=') > -1){
		window.location = ('/static/admin/index.html' + hash)
	}
}
