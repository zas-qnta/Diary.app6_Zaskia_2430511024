import React, { useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useDiary } from '../../src/context/DiaryContext';
import { useDiarySearch } from '../../src/hooks/useDiarySearch';
import DiaryCard from '../../src/components/DiaryCard';
import { COLORS, SPACE, RADIUS, TYPO } from '../../src/styles/tokens';

const MOODS = ['😊', '🚀', '☕', '✨'];

export default function HomeScreen() {
  const router = useRouter();
  const { entries, likedIds, toggleLike } = useDiary();
  const {
    query,
    setQuery,
    selectedMood,
    setSelectedMood,
    filteredEntries,
    resultCount,
    resetFilter,
  } = useDiarySearch(entries);

  const openDetail = useCallback(
    (id: number) => {
      router.push({
        pathname: '/detail/[id]',
        params: { id: String(id) },
      });
    },
    [router]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Buku Harian</Text>

      {/* Kolom Pencarian & Tombol Reset */}
      <View style={styles.searchRow}>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Cari diary..."
          style={styles.searchInput}
          placeholderTextColor={COLORS.muted}
        />
        <Pressable onPress={resetFilter} style={styles.resetButton}>
          <Text style={styles.resetText}>Reset</Text>
        </Pressable>
      </View>

      {/* Filter Mood */}
      <View style={styles.filterSection}>
        <Text style={styles.filterLabel}>Filter Mood:</Text>
        <View style={styles.moodRow}>
          {MOODS.map((item) => {
            const isSelected = selectedMood === item;
            return (
              <Pressable
                key={item}
                onPress={() => setSelectedMood(isSelected ? '' : item)}
                style={[
                  styles.moodChip,
                  isSelected && styles.moodChipSelected,
                ]}
              >
                <Text style={styles.moodText}>{item}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <Text style={styles.resultCount}>
        {resultCount} entri ditemukan
      </Text>

      <FlatList
        data={filteredEntries}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => {
          const liked = likedIds.has(item.id);
          return (
            <DiaryCard
              title={item.title}
              date={item.date}
              preview={item.preview}
              mood={item.mood}
              liked={liked}
              onPress={() => openDetail(item.id)}
              onToggleLike={() => toggleLike(item.id)}
            />
          );
        }}
        ListEmptyComponent={
          <Text style={styles.empty}>Tidak ada diary yang cocok.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACE.l,
    backgroundColor: COLORS.background,
  },
  heading: {
    fontSize: TYPO.h1,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACE.m,
  },
  searchRow: {
    flexDirection: 'row',
    gap: SPACE.s,
    marginBottom: SPACE.m,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.card,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    height: 44,
    color: COLORS.text,
  },
  resetButton: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: COLORS.border,
    borderRadius: RADIUS.card,
  },
  resetText: {
    fontWeight: '600',
    color: COLORS.text,
  },
  filterSection: {
    marginBottom: SPACE.m,
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: SPACE.xs,
  },
  moodRow: {
    flexDirection: 'row',
    gap: SPACE.s,
  },
  moodChip: {
    padding: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moodChipSelected: {
    borderColor: COLORS.accent,
    borderWidth: 2,
    backgroundColor: '#f0fdf4',
  },
  moodText: {
    fontSize: 20,
  },
  resultCount: {
    fontSize: TYPO.caption,
    color: COLORS.muted,
    marginBottom: SPACE.s,
  },
  list: {
    gap: SPACE.m,
    paddingBottom: SPACE.xl,
  },
  empty: {
    textAlign: 'center',
    color: COLORS.muted,
    paddingTop: 40,
  },
});