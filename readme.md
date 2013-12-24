# Voodoo XMas

A sample web application for the [Spark Core](http://spark.io) to control an LED or a PowerSwitch Tail 2 that can be deployed to [Heroku](http://heroku.com). This application is intentionally simple to show off the power and ability of the Spark Core system and how much you can accomplish with very little effort.  In order to use this you will need the following supplies:

* A [Spark Core](http://spark.io)
* An LED (and appropriate resistor) or a [PowerSwitch Tail 2](http://www.powerswitchtail.com/Pages/default.aspx) (and something to plug into it, like Christmas lights).
* Three wires (recommended colors - red (power), white (signal), black (ground).
* A Breadboard

First plug the spark core into the middle of the breadboard and connect it to power. Follow the instructions provided on the [Spark documentation site](http://docs.spark.io/#/) for connecting your core to the wireless.

Connect up your circuit, depending on your choice, in the following manner:

#### LED Circuit

Connect the LED positive lead, the longer one, to the D0 pin by way of the appropriate resistor. Connect the LED negative lead, the shorter one, to any of the GND or ground pins. Use this [awesome visual guide](http://docs.spark.io/#/examples/blink-an-led) from Spark Core.


#### PowerSwitch Tail 2 Circuit

Connect the red wire from the 3v3 pin of the Spark Core to the first connector on the PST. Connect the white wire from the D0 pin of the Spark Core to the second connector of the PST.
Connect the black wire from any of the GND pins of the Spark Core to the third (GND) connector of the PST.

### Spark Firmware

Copy the contents of the provided firmware.cpp in the sparkcore directory and paste it into the [Spark IDE](https://www.spark.io/build) under any app name. Make sure once you have pasted the code to hit the "Flash" button which is the lightning bolt on the left side of the screen. Now gather the pieces of information you will need later, 1) the spark core ID (also know as device id) located under the "Cores" tab (on the left, looks like a target sight). Find the specific spark core you would like to use and click the greater than sign &gt; which will open a panel with the Device ID in a text field. Copy that and save it somewhere.

Next grab your access token from the settings tab, a gear icon on the left, Copy the data in the text field under the label Access Token. Copy that and save it somewhere as well.

### Heroku

Posting the project to Heroku is the easy step, assuming you have git and heroku setup (just logged in is sufficient enough). Copy and paste the following lines into your terminal.

<pre>
git clone https://github.com/voodootikigod/voodooxmas.git
cd voodooxmas/
heroku create
git push heroku master
heroku config:set DEVICE_ID="that-value-you-copied-earlier-labeled-Device-ID"
heroku config:set ACCESS_TOKEN="that-value-you-copied-earlier-labeled-Access-Token"
</pre>

And that is it! when you ran the `heroku create` command it provided you with a URL, that URL is how you access your light(s). There will be a very small asterick (*) on the screen, when you click it, it will toggle your lights and redirect you back to the current status.

###Congrats
You just made an end-to-end Internet of Things thing -- now go make more!

-- @voodootikigod