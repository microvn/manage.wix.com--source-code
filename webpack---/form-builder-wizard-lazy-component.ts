import { ReactLazyComponent } from 'react-module-container';
import { FORM_BUILDER_WIZARD_COMP_ID } from './config';

const minified = (debug) => (debug ? '' : '.min');

const getFiles = ({ debug, config: { topology } }) => {
  const { wixFormsStaticsUrl } = topology;

  return [
    `${wixFormsStaticsUrl}${FORM_BUILDER_WIZARD_COMP_ID}.bundle${minified(
      debug,
    )}.js`,
    `${wixFormsStaticsUrl}${FORM_BUILDER_WIZARD_COMP_ID}${minified(debug)}.css`,
  ];
};

export class FormBuilderWizardLazyComponent extends ReactLazyComponent {
  constructor(props) {
    super(props, {
      files: getFiles(props),
      component: FORM_BUILDER_WIZARD_COMP_ID,
    });
  }
}
