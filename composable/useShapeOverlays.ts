export const ease = {
    // Easing functions for smooth animation transitions
    exponentialIn: (t: number) => {
        return t == 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
    },
    exponentialOut: (t: number) => {
        return t == 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
    },
    exponentialInOut: (t: number) => {
        return t == 0.0 || t == 1.0
            ? t
            : t < 0.5
                ? +0.5 * Math.pow(2.0, (20.0 * t) - 10.0)
                : -0.5 * Math.pow(2.0, 10.0 - (t * 20.0)) + 1.0;
    },
    sineOut: (t: number) => {
        const HALF_PI = 1.5707963267948966;
        return Math.sin(t * HALF_PI);
    },
    circularInOut: (t: number) => {
        return t < 0.5
            ? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t))
            : 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
    },
    cubicIn: (t: number) => {
        return t * t * t;
    },
    cubicOut: (t: number) => {
        const f = t - 1.0;
        return f * f * f + 1.0;
    },
    cubicInOut: (t: number) => {
        return t < 0.5
            ? 4.0 * t * t * t
            : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
    },
    quadraticOut: (t: number) => {
        return -t * (t - 2.0);
    },
    quarticOut: (t: number) => {
        return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
    },
};

export function useShapeOverlays(elem: any) {
    // State variables to manage the animation
    const path = useState('path', () => elem.value.querySelectorAll('path'));
    const numPoints = useState('numPoints', () => 18); // Number of points defining the path
    const duration = useState('duration', () => 600); // Animation duration in milliseconds
    const delayPointsArray = useState('delayPointsArray', () => Array(numPoints.value).fill(0)); // Array to store delays for each point
    const delayPointsMax = useState('delayPointsMax', () => 300); // Maximum delay value
    const delayPerPath = useState('delayPerPath', () => 100); // Delay between paths (if multiple)
    const timeStart = useState('timeStart', () => Date.now()); // Start time of the animation
    const isOpened = useState('isOpened', () => false); // Flag indicating if the shape is open or closed
    const isAnimating = useState('isAnimating', () => false); // Flag indicating if the animation is running

    // Function to toggle the animation (open or close)
    function toggle() {
        isAnimating.value = true;
        // Calculate random delays for each point on the path
        const range = 4 * Math.random() + 6;
        for (let i = 0; i < numPoints.value; i++) {
            const radian = i / (numPoints.value - 1) * Math.PI;
            delayPointsArray.value[i] = (Math.sin(-radian) + Math.sin(-radian * range) + 2) / 4 * delayPointsMax.value;
        }
        if (!isOpened.value) {
            open(); // Open the shape
        } else {
            close(); // Close the shape
        }
    }

    function open() {
        isOpened.value = true;
        // document.body.style.overflow = 'hidden';
        elem.value.classList.add('is-opened'); // Add CSS class for open state
        timeStart.value = Date.now(); // Reset start time
        renderLoop(); // Start the animation loop
    }

    function close() {
        isOpened.value = false;
        // document.body.style.overflow = '';
        elem.value.classList.remove('is-opened'); // Remove CSS class for open state
        timeStart.value = Date.now(); // Reset start time
        renderLoop(); // Start the animation loop
    }

    // Function to update the path's `d` attribute based on time
    function updatePath(time: any) {
        const points = [];
        for (let i = 0; i < numPoints.value + 1; i++) {
            points[i] = ease.cubicInOut(Math.min(Math.max(time - delayPointsArray.value[i], 0) / duration.value, 1)) * 100;
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

    // Function to render the path animation
    function render() {
        for (let i = 0; i < path.value.length; i++) {
            const time = Date.now() - (timeStart.value + delayPerPath.value * (isOpened.value ? i : path.value.length - i - 1));
            path.value[i].setAttribute('d', updatePath(time)); // Update the path's d attribute with the calculated points
        }
    }

    // Animation loop to update the path repeatedly
    function renderLoop() {
        render();
        if (Date.now() - timeStart.value < duration.value + delayPerPath.value * (path.value.length - 1) + delayPointsMax.value) {
            requestAnimationFrame(() => renderLoop()); // Continue the animation loop using requestAnimationFrame for smooth performance
        } else {
            isAnimating.value = false; // Set animation flag to false when finished
        }
    }

    return {
        toggle, // Function to toggle the animation
        isAnimating, // Flag to indicate if the animation is running
        isOpened // Flag to indicate if the shape is currently open
    };
}