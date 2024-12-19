import React from 'react'
import { ActivityIndicator, FlatList, RefreshControl, View, SafeAreaView } from 'react-native'
import useHomeController from './home.controller'
import { Logo } from './styles'
import { useTheme } from 'styled-components'
import Container from '../../common/components/Container'
import { flatListStyleSheet } from '../../common/utils/flatlist'
import ShowCover from '../../common/components/ShowCover'
import Spacer from '../../common/components/Spacer'
import useMyNavigation from '../../common/hooks/useMyNavigation'

const Home = () => {
    const { navigate } = useMyNavigation()

    const { colors, spacing } = useTheme()
    const { loading, shows, currentPage, isRefreshing, loadShows } = useHomeController()

    return (
        <Container>
            <SafeAreaView>
                <FlatList
                    data={shows}
                    numColumns={2}
                    columnWrapperStyle={flatListStyleSheet.columnWrapperStyle}
                    style={{ paddingHorizontal: spacing.sm }}
                    ListHeaderComponent={() => (
                        <View>
                            <Logo />
                        </View>
                    )}
                    renderItem={({ item, index }) => (
                        <ShowCover
                            key={item.id + index + item.name}
                            url={item.image?.medium}
                            title={item.name}
                            onPress={() =>
                                navigate('Details', {show: item})
                            }
                        />
                    )}
                    ItemSeparatorComponent={() => (
                        <Spacer height={spacing.md} />
                    )}
                    ListFooterComponent={() => {
                        return (
                            <View>
                                {loading && (
                                    <>
                                        <Spacer height={spacing.lg} />
                                        <ActivityIndicator
                                            size='small'
                                            color={colors.onSecondary}
                                        />
                                    </>
                                )}
                                <Spacer height={spacing.lg} />
                            </View>
                        )
                    }}
                    refreshControl={
                        <RefreshControl
                            enabled={!isRefreshing}
                            tintColor={colors.onSecondary}
                            colors={[colors.primary]}
                            refreshing={isRefreshing}
                            onRefresh={() => loadShows(0, true)}
                        />
                    }
                    onEndReached={() => {
                        if (!loading) {
                            loadShows(currentPage + 1)
                        }
                    }}
                />
            </SafeAreaView>
        </Container>
    )
}

export default Home