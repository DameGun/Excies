import {
  CreateDetailedExerciseListItemParameterType,
  CreationActiveIcon,
  WeightMeasurementSystemType,
} from '@/constants/detailedExerciseListItem';
import { useStyles } from '@/hooks/useStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { View, Pressable, Text } from 'react-native';
import { getStyles } from './styles';

type CreateDetailedExerciseListItemHeaderParams = {
  activeParameter: CreateDetailedExerciseListItemParameterType;
  activeWeightSystem: WeightMeasurementSystemType;
  onWeightSystemClick(value: WeightMeasurementSystemType): void;
};

export function CreateDetailedExerciseListItemHeader({
  activeParameter,
  activeWeightSystem,
  onWeightSystemClick,
}: CreateDetailedExerciseListItemHeaderParams) {
  const styles = useStyles(getStyles);
  const { t } = useTranslation();

  const handleWeightSystemClick = (value: WeightMeasurementSystemType) => () => {
    onWeightSystemClick(value);
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeftContainer}>
        <MaterialCommunityIcons
          name={CreationActiveIcon[activeParameter]}
          style={styles.createTypeIcon}
        />
        <Text style={styles.header}>
          {t(`detailedExerciseListItems.create.${activeParameter}Label`)}
        </Text>
      </View>
      <View style={styles.headerRightContainer}>
        <Pressable
          style={styles.weightSystemButton(
            'left',
            activeWeightSystem === WeightMeasurementSystemType.Kg
          )}
          onPress={handleWeightSystemClick(WeightMeasurementSystemType.Kg)}
        >
          <Text style={styles.weightSystemButtonText}>
            {t('detailedExerciseListItems.weightBadgePlain.kg')}
          </Text>
        </Pressable>
        <Pressable
          style={styles.weightSystemButton(
            'right',
            activeWeightSystem === WeightMeasurementSystemType.Lbs
          )}
          onPress={handleWeightSystemClick(WeightMeasurementSystemType.Lbs)}
        >
          <Text style={styles.weightSystemButtonText}>
            {t('detailedExerciseListItems.weightBadgePlain.lbs')}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
