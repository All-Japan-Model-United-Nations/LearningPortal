// ページ内スクロール
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// 検索機能（仮実装）
function searchContent() {
    const query = document.getElementById("searchInput").value;
    if (query) {
        alert(`「${query}」に関連する記事を検索中...`);
    } else {
        alert("検索キーワードを入力してください。");
    }
}
