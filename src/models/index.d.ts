import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Dua {
  readonly arabic: string;
  readonly translations: string;
  readonly transliteration: string;
  constructor(init: ModelInit<Dua>);
}

export declare class Duas {
  readonly id: string;
  readonly pageTitle: string;
  readonly category?: string;
  readonly reference?: string;
  readonly duas?: Dua[];
  constructor(init: ModelInit<Duas>);
  static copyOf(source: Duas, mutator: (draft: MutableModel<Duas>) => MutableModel<Duas> | void): Duas;
}

export declare class FardSalah {
  readonly id: string;
  readonly date: string;
  readonly month: string;
  readonly week: string;
  readonly year: string;
  readonly fajr?: boolean;
  readonly dhuhr?: boolean;
  readonly asr?: boolean;
  readonly magrib?: boolean;
  readonly isha?: boolean;
  readonly color?: string;
  readonly status?: number;
  constructor(init: ModelInit<FardSalah>);
  static copyOf(source: FardSalah, mutator: (draft: MutableModel<FardSalah>) => MutableModel<FardSalah> | void): FardSalah;
}

export declare class Quran {
  readonly id: string;
  readonly date: string;
  readonly month: string;
  readonly week: string;
  readonly year: string;
  readonly hundred?: boolean;
  readonly juz?: boolean;
  readonly manzil?: boolean;
  readonly mulk?: boolean;
  readonly lastAyatsBaqara?: boolean;
  readonly color?: string;
  readonly status?: number;
  constructor(init: ModelInit<Quran>);
  static copyOf(source: Quran, mutator: (draft: MutableModel<Quran>) => MutableModel<Quran> | void): Quran;
}

export declare class SunnaSalah {
  readonly id: string;
  readonly date: string;
  readonly month: string;
  readonly week: string;
  readonly year: string;
  readonly fajr?: boolean;
  readonly dhuhr?: boolean;
  readonly asr?: boolean;
  readonly magrib?: boolean;
  readonly isha?: boolean;
  readonly color?: string;
  readonly status?: number;
  constructor(init: ModelInit<SunnaSalah>);
  static copyOf(source: SunnaSalah, mutator: (draft: MutableModel<SunnaSalah>) => MutableModel<SunnaSalah> | void): SunnaSalah;
}

export declare class Tahajjud {
  readonly id: string;
  readonly date: string;
  readonly month: string;
  readonly week: string;
  readonly year: string;
  readonly two?: boolean;
  readonly four?: boolean;
  readonly eight?: boolean;
  readonly color?: string;
  readonly status?: number;
  constructor(init: ModelInit<Tahajjud>);
  static copyOf(source: Tahajjud, mutator: (draft: MutableModel<Tahajjud>) => MutableModel<Tahajjud> | void): Tahajjud;
}

export declare class Sadaqat {
  readonly id: string;
  readonly date: string;
  readonly month: string;
  readonly week: string;
  readonly year: string;
  readonly money?: boolean;
  readonly love?: boolean;
  readonly smile?: boolean;
  readonly lokma?: boolean;
  readonly color?: string;
  readonly status?: number;
  constructor(init: ModelInit<Sadaqat>);
  static copyOf(source: Sadaqat, mutator: (draft: MutableModel<Sadaqat>) => MutableModel<Sadaqat> | void): Sadaqat;
}

export declare class MorningDua {
  readonly id: string;
  readonly date: string;
  readonly month: string;
  readonly week: string;
  readonly year: string;
  readonly morning?: boolean;
  readonly evening?: boolean;
  readonly color?: string;
  readonly status?: number;
  constructor(init: ModelInit<MorningDua>);
  static copyOf(source: MorningDua, mutator: (draft: MutableModel<MorningDua>) => MutableModel<MorningDua> | void): MorningDua;
}