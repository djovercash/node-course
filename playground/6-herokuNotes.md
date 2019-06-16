# Notes on Heroku

## Heroku Commands
* `heroku login`
	* Logs you into your heroku account from the CLI line
* `heroku keys:add`
	* Adds ssh key to heroku
* `heroku create [NAME]`
	* Creates a new heroku project (run from root directory of your project). Name must be unique


## To Deploy
* Make sure in `package.json` to create a "start" script to Heroku knows what to do
* Set up port variable (see `src/app.js`)
* Update fetch request
