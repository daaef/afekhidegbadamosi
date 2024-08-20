// checkout the updatePath code

import {ease} from "~/composable/useShapeOverlays";

export function useShapeOverlays(elem: any) {
    const path = useState('path', () => elem.value.querySelectorAll('path'));
    const numPoints = useState('numPoints', () => 18);
    const duration = useState('duration', () => 600);
    const delayPointsArray = useState('delayPointsArray', () => Array(numPoints.value).fill(0));
    const delayPointsMax = useState('delayPointsMax', () => 300);
    const delayPerPath = useState('delayPerPath', () => 100);
    const timeStart = useState('timeStart', () => Date.now());
    const isOpened = useState('isOpened', () => false);
    const isAnimating = useState('isAnimating', () => false);

    function toggle() {
        isAnimating.value = true;
        const range = 4 * Math.random() + 6;
        for (let i = 0; i < numPoints.value; i++) {
            const radian = i / (numPoints.value - 1) * Math.PI;
            delayPointsArray.value[i] = (Math.sin(-radian) + Math.sin(-radian * range) + 2) / 4 * delayPointsMax.value;
        }
        if (!isOpened.value) {
            open();
        } else {
            close();
        }
    }

    function open() {
        isOpened.value = true;
        elem.value.classList.add('is-opened');
        timeStart.value = Date.now();
        renderLoop();
    }

    function close() {
        isOpened.value = false;
        elem.value.classList.remove('is-opened');
        timeStart.value = Date.now();
        renderLoop();
    }

    function updatePath(time: any) {
        const points = [];
        for (let i = 0; i < numPoints.value + 1; i++) {
            // Adjust time based on opening/closing state
            let adjustedTime = time - delayPointsArray.value[i];
            if (!isOpened.value) {
                // Reverse animation on close
                adjustedTime = duration.value - adjustedTime;
            }
            points[i] = ease.cubicInOut(Math.min(Math.max(adjustedTime, 0) / duration.value, 1)) * 100;
        }

        let str = '';
        str += isOpened.value ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `;
        for (let i = 0; i < numPoints.value - 1; i++) {
            const p = (i + 1) / (numPoints.value - 1) * 100;
            const cp = p - (1 / (numPoints.value - 1) * 100) / 2;
            str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
        }
        str += isOpened.value ? `V 0 H 0` : `V 100 H 0`;
        return str;
    }

    function render() {
        for (let i = 0; i < path.value.length; i++) {
            const time = Date.now() - (timeStart.value + delayPerPath.value * (isOpened.value ? i : path.value.length - i - 1));
            path.value[i].setAttribute('d', updatePath(time));
        }
    }

    function renderLoop() {
        render();
        if (Date.now() - timeStart.value < duration.value + delayPerPath.value * (path.value.length - 1) + delayPointsMax.value) {
            requestAnimationFrame(() => renderLoop());
        } else {
            isAnimating.value = false;
        }
    }

    return {
        toggle, isAnimating, isOpened
    };
}

/*Time Adjustment in updatePath:

We now adjust the time value inside the for loop based on whether the shape is opening or closing.
If isOpened.value is true (opening): We use time - delayPointsArray.value[i] as usual.
If isOpened.value is false (closing): We reverse the animation by using duration.value - adjustedTime. This subtracts the elapsed time from the total duration, making the animation run in reverse.
How it Works

When you call close(), the isOpened.value becomes false.
During the renderLoop, the updatePath function will use the reversed time calculation, effectively reversing the animation.
Important Note: This modification assumes that the ease.cubicInOut function is symmetrical, meaning that its progress in reverse is visually similar to its forward progress. If you are using a non-symmetrical easing function, you might need to adjust the time calculation or find a different easing function that better supports reversing the animation.*/