import PieChartIcon from './';
import renderWithTheme from '~src/_helpers/testing/renderWithTheme.native';

describe('<PieChartIcon />', () => {
  it('should render PieChartIcon', () => {
    const renderTree = renderWithTheme(
      <PieChartIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});
