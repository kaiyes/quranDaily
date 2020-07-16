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