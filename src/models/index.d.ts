import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Dua {
  readonly arabic: string;
  readonly translations_en?: string;
  readonly translations_bn?: string;
  readonly transliteration_en?: string;
  readonly transliteration_bn?: string;
  constructor(init: ModelInit<Dua>);
}

export declare class Duas {
  readonly id: string;
  readonly pageTitle_bn?: string;
  readonly pageTitle_en?: string;
  readonly category?: string;
  readonly duas?: Dua[];
  constructor(init: ModelInit<Duas>);
  static copyOf(source: Duas, mutator: (draft: MutableModel<Duas>) => MutableModel<Duas> | void): Duas;
}

export declare class Fard {
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
  readonly status?: number;
  constructor(init: ModelInit<Fard>);
  static copyOf(source: Fard, mutator: (draft: MutableModel<Fard>) => MutableModel<Fard> | void): Fard;
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
  readonly status?: number;
  constructor(init: ModelInit<Quran>);
  static copyOf(source: Quran, mutator: (draft: MutableModel<Quran>) => MutableModel<Quran> | void): Quran;
}

export declare class Sunna {
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
  readonly status?: number;
  constructor(init: ModelInit<Sunna>);
  static copyOf(source: Sunna, mutator: (draft: MutableModel<Sunna>) => MutableModel<Sunna> | void): Sunna;
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
  readonly status?: number;
  constructor(init: ModelInit<Tahajjud>);
  static copyOf(source: Tahajjud, mutator: (draft: MutableModel<Tahajjud>) => MutableModel<Tahajjud> | void): Tahajjud;
}

export declare class Sadaqa {
  readonly id: string;
  readonly date: string;
  readonly month: string;
  readonly week: string;
  readonly year: string;
  readonly money?: boolean;
  readonly love?: boolean;
  readonly smile?: boolean;
  readonly lokma?: boolean;
  readonly status?: number;
  constructor(init: ModelInit<Sadaqa>);
  static copyOf(source: Sadaqa, mutator: (draft: MutableModel<Sadaqa>) => MutableModel<Sadaqa> | void): Sadaqa;
}

export declare class Morn {
  readonly id: string;
  readonly date: string;
  readonly month: string;
  readonly week: string;
  readonly year: string;
  readonly morning?: boolean;
  readonly evening?: boolean;
  readonly status?: number;
  constructor(init: ModelInit<Morn>);
  static copyOf(source: Morn, mutator: (draft: MutableModel<Morn>) => MutableModel<Morn> | void): Morn;
}