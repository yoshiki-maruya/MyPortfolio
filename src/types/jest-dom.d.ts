// Loads the official @testing-library/jest-dom matcher type augmentation
// (toBeInTheDocument, toHaveTextContent, toHaveAttribute, etc.) for
// @jest/globals' `expect` across the whole project. Importing the package's
// own `/jest-globals` entry guarantees the augmentation's type parameters
// match @jest/expect's `Matchers<R>` so the interfaces merge correctly.
// This means test files don't need the per-file side-effect import, which
// linters tend to strip as "unused" and thereby reintroduce the errors.
import '@testing-library/jest-dom/jest-globals';
