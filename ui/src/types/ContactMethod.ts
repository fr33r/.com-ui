export enum ContactMethodType {
	PHONE = 1,
	EMAIL = 2
}

export interface ContactMethod {
	methodType: ContactMethodType
	name: string
	reachableAt: string
}
