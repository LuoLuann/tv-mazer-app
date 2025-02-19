import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react'
import { FlatList, Platform, useWindowDimensions, View } from 'react-native'
import useDetailController from './detail.controller';
import Container from '../../common/components/Container';
import Content from '../../common/components/Content';
import Spacer from '../../common/components/Spacer';
import { useTheme } from 'styled-components/native';
import BackButton from '../../common/components/BackButton';
import EpisodeCard from '../../common/components/EpisodeCard';
import { ContentButtonSeason, RowButtonSeason, RowCover, RowFavorite } from './styles';
import ShowCover from '../../common/components/ShowCover';
import Text from '../../common/components/Text';
import Icon from '../../common/components/Icon';
import SeasonsModal from './localComponents/SeasonsModal';

const Details: React.FC = () => {
    /**
     * Navigation
     */
    const {
        params: { show },
    } = useRoute<DetailRouteProp>();

    const { goBack } = useNavigation()

    const [openModal, setOpenModal] = useState(false)

    const { colors, spacing } = useTheme()
    const { width } = useWindowDimensions();

    const { episodes, seasons, formattedDate, genres, schedule, moreSummary, selectedSeason, setSelectedSeason, summaryWithoutHtml, toggleMoreSummary } = useDetailController({ show });

    return (
        <Container>
            <Content>
                <Spacer height={spacing.md} />
                <BackButton onPress={goBack} />
                <Spacer height={spacing.md} />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={episodes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <EpisodeCard episode={item} />
                    )}
                    ItemSeparatorComponent={() => <Spacer height={spacing.md} />}
                    ListHeaderComponent={() => {
                        const isFavorite = false
                        return (
                            <View>
                                <RowCover>
                                    <ShowCover
                                        url={show.image?.medium}
                                    />
                                    <Spacer width={spacing.md} />
                                    <View style={{ maxWidth: width * 0.4 }} >
                                        <Text size={24}>{show.name}</Text>
                                        <Spacer width={spacing.sm} />
                                        <RowFavorite
                                            onPress={() => {
                                                if (isFavorite) {
                                                    //TODO: favorite
                                                }
                                            }}
                                        >
                                            <Text size={16} color='caption'>
                                                {show.rating.average}
                                            </Text>
                                            <Spacer height={spacing.sm} />
                                            <Icon icon={isFavorite ? 'star' : 'starOutline'} color='yellow' />
                                        </RowFavorite>
                                        <Spacer height={spacing.sm} />
                                        <Text color="caption">{schedule}</Text>
                                        <Spacer height={spacing.lg} />
                                        <Text color="caption">{formattedDate}</Text>
                                        <Spacer height={spacing.sm} />
                                        <Text size={12} color="caption">
                                            {genres}
                                        </Text>
                                    </View>
                                </RowCover>
                                <Spacer height={spacing.md} />
                                <Text>
                                    {summaryWithoutHtml.slice(0, moreSummary ? undefined : 200)}
                                    {summaryWithoutHtml.length >= 200 && (
                                        <Text onPress={toggleMoreSummary} color='caption'>
                                            {moreSummary ? 'Show less' : 'Show more'}
                                        </Text>
                                    )}
                                </Text>
                                {!!selectedSeason && (
                                    <View>
                                        <Spacer height={spacing.lg} />
                                        <RowButtonSeason onPress={() => setOpenModal(true)} >
                                            <ContentButtonSeason>
                                                <Text color='caption'>Season {selectedSeason.number}</Text>
                                                <Spacer width={spacing.sm} />
                                                <Icon icon='menuDown' color={colors.caption} />
                                            </ContentButtonSeason>
                                        </RowButtonSeason>
                                        <Spacer 
                                            height={Platform.OS === 'ios' ? spacing.sm : spacing.md}
                                        />
                                    </View>
                                )}
                            </View>
                        )
                    }}
                />
            </Content>
            <SeasonsModal 
                visible={openModal}
                setVisible={setOpenModal}
                seasons={seasons}
                selectedSeason={selectedSeason}
                setSelectedSeason={setSelectedSeason}
            />
        </Container>
    )
}

export default Details