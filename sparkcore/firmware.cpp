// the PIN that the LED or [PowerSwitch Tail 2](http://www.powerswitchtail.com/Pages/default.aspx) is connected to (note: if PST2, you will also need to connect up the power and ground lines as well)
int lights = D0;

// local variable to track state
int on = false;


// toggle lights
int toggleLights(String param) {
    digitalWrite(lights, (on ? HIGH : LOW));
    on = !on;
    return (on ? 1 : 0);
}


// Get status
int statusLights(String param) {
    return (on ? 1 : 0);
}


void setup() {
    // Register API functions with Spark Cloud
    Spark.function("toggle", toggleLights);
    Spark.function("status", statusLights);

    // Turn off the breathing LED orb on the Spark Core.
    RGB.control(true);
    RGB.color(0, 0, 0);

    // Set the PIN to output
    pinMode(lights, OUTPUT);

    //Turn off by default
    digitalWrite(lights, HIGH);
}

void loop() {
}