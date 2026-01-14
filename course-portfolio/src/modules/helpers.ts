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