// @ts-nocheck

/**
 * Auto Generated by orval
 * Do not edit manually.
 * BaseApp Backend API
 * API para el sistema de BaseApp Backend
 */

/**
 * * `Agricultura / Pesca` - Agricultura Pesca
 * `Tecnología / Innovación` - Tecnologia Innovacion
 * `Negocios / Emprendimiento` - Negocios Emprendimiento
 * `Educación / Salud` - Educacion Salud
 * `Industria / Manufactura` - Industria Manufactura
 * `Otros` - Otros
 */
export enum WorkSectorEnum {
  "Agricultura_/_Pesca" = "Agricultura / Pesca",
  "Tecnología_/_Innovación" = "Tecnología / Innovación",
  "Negocios_/_Emprendimiento" = "Negocios / Emprendimiento",
  "Educación_/_Salud" = "Educación / Salud",
  "Industria_/_Manufactura" = "Industria / Manufactura",
  Otros = "Otros",
}
export interface UserRegistration {
  /**
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username: string;
  /** @maxLength 254 */
  email?: string;
  password: string;
}

export interface User {
  readonly id: number;
  /**
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username: string;
  /** @maxLength 254 */
  email?: string;
}

/**
 * * `Sí, quiero un país con apoyo social.` - Si
 * `No me importa.` - No
 */
export enum UnemploymentSupportEnum {
  "Sí,_quiero_un_país_con_apoyo_social" = "Sí, quiero un país con apoyo social.",
  No_me_importa = "No me importa.",
}
/**
 * * `Quiero un país con muy baja tasa de desempleo.` - Baja Tasa
 * `No me importa mucho la tasa de desempleo.` - No Importa
 */
export enum UnemploymentRateEnum {
  Quiero_un_país_con_muy_baja_tasa_de_desempleo = "Quiero un país con muy baja tasa de desempleo.",
  No_me_importa_mucho_la_tasa_de_desempleo = "No me importa mucho la tasa de desempleo.",
}
export interface TokenRefresh {
  readonly access: string;
  refresh: string;
}

/**
 * * `Sí, prefiero un país innovador.` - Si
 * `No es una prioridad para mí.` - No
 */
export enum ResearchDevelopmentEnum {
  "Sí,_prefiero_un_país_innovador" = "Sí, prefiero un país innovador.",
  No_es_una_prioridad_para_mí = "No es una prioridad para mí.",
}
/**
 * * `Muy importante, quiero un país con menos desigualdad.` - Muy Importante
 * `No es una prioridad.` - No Importa
 */
export enum PovertyReductionEnum {
  "Muy_importante,_quiero_un_país_con_menos_desigualdad" = "Muy importante, quiero un país con menos desigualdad.",
  No_es_una_prioridad = "No es una prioridad.",
}
export interface PatchedUser {
  readonly id?: number;
  /**
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username?: string;
  /** @maxLength 254 */
  email?: string;
}

/**
 * * `Muy importante.` - Muy Importante
 * `No me importa.` - No Importa
 */
export enum MobileAccessEnum {
  Muy_importante = "Muy importante.",
  No_me_importa = "No me importa.",
}
/**
 * * `Sí, quiero un país con menor carga impositiva.` - Si
 * `No me importa.` - No
 */
export enum LowTaxesEnum {
  "Sí,_quiero_un_país_con_menor_carga_impositiva" = "Sí, quiero un país con menor carga impositiva.",
  No_me_importa = "No me importa.",
}
/**
 * * `Ciudad` - Ciudad
 * `Rural` - Rural
 * `No me importa` - No Importa
 */
export enum LivingAreaEnum {
  Ciudad = "Ciudad",
  Rural = "Rural",
  No_me_importa = "No me importa",
}
/**
 * * `Prefiero un país con empleos estables y buenos contratos.` - Empleos Estables
 * `No me importa si el empleo es informal o vulnerable.` - Informal
 */
export enum JobSecurityEnum {
  Prefiero_un_país_con_empleos_estables_y_buenos_contratos = "Prefiero un país con empleos estables y buenos contratos.",
  No_me_importa_si_el_empleo_es_informal_o_vulnerable = "No me importa si el empleo es informal o vulnerable.",
}
/**
 * * `Muy importante, quiero un país con buena atención médica.` - Muy Importante
 * `No me importa mucho.` - No Importa
 */
export enum HealthcareImportanceEnum {
  "Muy_importante,_quiero_un_país_con_buena_atención_médica" = "Muy importante, quiero un país con buena atención médica.",
  No_me_importa_mucho = "No me importa mucho.",
}
/**
 * * `Hombre` - Male
 * `Mujer` - Female
 */
export enum GenderEnum {
  Hombre = "Hombre",
  Mujer = "Mujer",
}
/**
 * * `Sí, quiero un país con un alto nivel de comercio internacional.` - Si
 * `No es relevante para mí.` - No Importa
 */
export enum ExportEconomyEnum {
  "Sí,_quiero_un_país_con_un_alto_nivel_de_comercio_internacional" = "Sí, quiero un país con un alto nivel de comercio internacional.",
  No_es_relevante_para_mí = "No es relevante para mí.",
}
export interface EmailTokenObtain {
  email: string;
  password: string;
}

/**
 * * `Muy importante (Quiero emprender o invertir).` - Muy Importante
 * `Moderadamente importante (Podría considerar oportunidades).` - Moderado
 * `No es importante para mí.` - No Importante
 */
export enum EaseOfBusinessEnum {
  "Muy_importante_(Quiero_emprender_o_invertir)" = "Muy importante (Quiero emprender o invertir).",
  "Moderadamente_importante_(Podría_considerar_oportunidades)" = "Moderadamente importante (Podría considerar oportunidades).",
  No_es_importante_para_mí = "No es importante para mí.",
}
/**
 * * `Sí, quiero facilidades para emprender.` - Si
 * `No me importa.` - No
 */
export enum CompanyRegistrationEnum {
  "Sí,_quiero_facilidades_para_emprender" = "Sí, quiero facilidades para emprender.",
  No_me_importa = "No me importa.",
}
/**
 * * `Muy importante, quiero vivir en un país con baja contaminación.` - Muy Importante
 * `No me importa mucho.` - No Importa
 */
export enum AirPollutionEnum {
  "Muy_importante,_quiero_vivir_en_un_país_con_baja_contaminación" = "Muy importante, quiero vivir en un país con baja contaminación.",
  No_me_importa_mucho = "No me importa mucho.",
}
/**
 * * `Sí, prefiero un país con oportunidades en agricultura.` - Si
 * `No, prefiero un país con una economía diversificada.` - No
 * `No me importa.` - No Importa
 */
export enum AgricultureEconomyEnum {
  "Sí,_prefiero_un_país_con_oportunidades_en_agricultura" = "Sí, prefiero un país con oportunidades en agricultura.",
  "No,_prefiero_un_país_con_una_economía_diversificada" = "No, prefiero un país con una economía diversificada.",
  No_me_importa = "No me importa.",
}
export interface PatchedForm {
  readonly id?: number;
  /**
   * @minimum -9223372036854776000
   * @maximum 9223372036854776000
   */
  age?: number;
  gender?: GenderEnum;
  salary?: number;
  agriculture_economy?: AgricultureEconomyEnum;
  ease_of_business?: EaseOfBusinessEnum;
  foreign_investment?: MobileAccessEnum;
  export_economy?: ExportEconomyEnum;
  work_sector?: WorkSectorEnum;
  unemployment_rate?: UnemploymentRateEnum;
  job_security?: JobSecurityEnum;
  electricity_access?: MobileAccessEnum;
  air_pollution?: AirPollutionEnum;
  living_area?: LivingAreaEnum;
  healthcare_importance?: HealthcareImportanceEnum;
  mobile_access?: MobileAccessEnum;
  research_development?: ResearchDevelopmentEnum;
  low_taxes?: LowTaxesEnum;
  company_registration?: CompanyRegistrationEnum;
  poverty_reduction?: PovertyReductionEnum;
  unemployment_support?: UnemploymentSupportEnum;
  readonly created_at?: string;
  readonly updated_at?: string;
  user?: number;
}

export interface Form {
  readonly id: number;
  /**
   * @minimum -9223372036854776000
   * @maximum 9223372036854776000
   */
  age: number;
  gender?: GenderEnum;
  salary: number;
  agriculture_economy?: AgricultureEconomyEnum;
  ease_of_business?: EaseOfBusinessEnum;
  foreign_investment?: MobileAccessEnum;
  export_economy?: ExportEconomyEnum;
  work_sector?: WorkSectorEnum;
  unemployment_rate?: UnemploymentRateEnum;
  job_security?: JobSecurityEnum;
  electricity_access?: MobileAccessEnum;
  air_pollution?: AirPollutionEnum;
  living_area?: LivingAreaEnum;
  healthcare_importance?: HealthcareImportanceEnum;
  mobile_access?: MobileAccessEnum;
  research_development?: ResearchDevelopmentEnum;
  low_taxes?: LowTaxesEnum;
  company_registration?: CompanyRegistrationEnum;
  poverty_reduction?: PovertyReductionEnum;
  unemployment_support?: UnemploymentSupportEnum;
  readonly created_at: string;
  readonly updated_at: string;
  user: number;
}
