# Countdown for ionic

Countdown component for ionic, pure css and js, without any ionic components.
With and without a progress bar.
### Installation
1. Download the `countdown` folder above
2. put it in your `src/components` folder
3. insert it in your module

### Properties
| name | type | deafult | description |
| ------ |--- |------ | ---|
| isBar | boolean |false | Show the bar
| hideTime |boolean | false | Hide the remaining time. |
| startTime |number | 60 | start time of countdown.(` in seconds!`)|
| buttonText | Array<String> | ["resume", "pause", "replay", "start"] |This has to do with status. The button will display buttonsText [status]. As in binary 0 it means off, 1 means it is running. (The buttonText \ [0 \] (= "resume") will be displayed when the timer is off). 2 means that the timer has elapsed, finished and 3 means he's ready to start|
| callback | function | no default, obligatory | this function will be called after the time runs out |

### Samples
 - Basic img
 <br> <countdown (callback)="callback()"></countdown>
 <br> img
 - Basic with bar img
 <br><countdown [isBar]="true" [startTime]="45" (callback)="callback()"></countdown>
 <br> img
 - mini
 <br><countdown [hideTime]="true" [isBar]="true" [startTime]="45" (callback)="callback()">
 <br> img
 - custom text
 <br><countdown [buttonTexts]="['c', 'b', 'd', 'a']" [startTime]="5" (callback)="callback()"></countdown>
 <br>img
#### Styling
``` 
countdown {
    .background {
        background-color: red;
    }
    .bar {
        background-color: blueviolet;
    }
}
```