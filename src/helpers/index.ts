export const isInteger = (num: number) => {
    return (num ^ 0) === num;
}

export const getValue = (data: Array<{[key: string]: number}>, from: string, to:string) => {
    // @ts-ignore
    return Math.ceil(((1/data[Object.keys(data).filter(r => r === from)[0]]) * data[to].toFixed(2)) * 100) / 100;
}