/**
 * Status of a module indicating its development stage.
 */
export enum ModuleStatus {
  /** Fully implemented and working module */
  Working = "Working",
  /** Partially implemented module */
  Partially = "Partially",
  /** Module not yet implemented */
  NotImplemented = "NotImplemented",
  /** Module is deprecated and should not be used */
  Deprecated = "Deprecated",
  /** Module is planned but not started */
  Planned = "Planned",
}

/**
 * Represents a module in a project.
 */
export interface Modules {
  /** Name of the module */
  name: string;
  /** Optional: description of the module */
  description?: string;
  /** Current status of the module */
  status: ModuleStatus;
  /** Optional: review or notes about the module */
  review?: string;
}

/**
 * Represents a GitHub repository.
 */
export interface Github {
  /** Repository name */
  name?: string;
  /** Optional: description of the repository */
  description?: string;
  /** URL of the repository */
  url: string;
}

/**
 * Represents an NPM package.
 */
export interface NPM {
  /** Package name */
  name?: string;
  /** Optional: description of the package */
  description?: string;
  /** URL of the package */
  url: string;
}

/**
 * Represents a project scope
 */
export interface Scopes {
  /** Scope title */
  title: string;
  /** Optional: description of the scope */
  description?: string;
}

/**
 * Represents a project with associated modules, GitHub repositories, and NPM packages.
 */
export interface ProjectType {
  /** Name of the project */
  name: string;
  /** Description of the project */
  description?: string;
  /** Optional: project URL */
  url?: string;
  /** Optional: project icon URL */
  icon_url?: string;
  /** Optional: project scope as description */
  scope_description?: string;
  /** Optional: project scope as detailed list */
  scope_list?: Scopes[];
  /** List of GitHub repositories associated with the project */
  github_urls: Github[];
  /** Optional: list of NPM packages associated with the project */
  npm_urls?: NPM[];
  /** Optional: list of modules in the project */
  modules?: Modules[];
}
