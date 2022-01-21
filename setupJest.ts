import 'zone.js';
import 'zone.js/testing';
import 'jest-preset-angular';
import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);