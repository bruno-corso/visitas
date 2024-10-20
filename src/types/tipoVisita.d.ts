import dataVisitas from '../utils/data.json'

export type VisitasProp = typeof dataVisitas

export type ItensVisitasProp = (typeof VisitasProp)[0]
