import { TextNode, Component } from './types';

export default class ElementNode {
    root: HTMLElement

    constructor(type: string) {
        this.root = document.createElement(type)
    }

    setAttribute(name: string, value: any) {
        if (name.match(/^on([\s\S]+)/)) {
            const eventName = RegExp.$1.replace(/([\s\S])/,c => c.toLocaleLowerCase())
            this.root.addEventListener(eventName, value, false)
            return
        }
        if (name === 'className') {
            this.root.setAttribute('class',value)
            return
        }
        this.root.setAttribute(name,value)
    }

    appendChild(component: TextNode | ElementNode | Component) {
        this.root.appendChild(component.root)
    }
}