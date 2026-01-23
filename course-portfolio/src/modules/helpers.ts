export function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export const getPosition = (event: MouseEvent | Touch, container: Element): { x: number, y: number } => {
    const rect = container.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

export const clamp = (value: number, min: number, max: number): number => {
    return Math.max(min, Math.min(max, value));
}

export const kalmanFilter = (coef:number, value:number, oldValue:number) => {
   return value * coef + oldValue * (1 - coef)
}