export interface Technology {
    readonly name: string
    readonly stars: 1 | 2 | 3
    readonly imagePath: string
    readonly backgroundColor: string
    readonly whiteForeground?: boolean
    readonly alternativeAlt?: string
    readonly isLarge?: boolean
}

export interface TechnologiesStack {
    readonly languages: Technology[]
    readonly mobile: Technology[]
    readonly backend: Technology[]
    readonly frontend: Technology[]
    readonly misc: Technology[]
}