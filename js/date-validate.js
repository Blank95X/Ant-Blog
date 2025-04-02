/**
 * 判断文章是否过期（超过 365 天）
 * 如果过期，则返回 true；未过期，则移除 id 为 date_validate 的 div 并返回 false
 * @param {string} date - 文章发布日期 (YYYY-MM-DD 格式)
 * @returns {boolean} 是否过期
 */
function isOutdated(date) {
    // 计算是否过期
    const outdated = moment().diff(moment(date, 'YYYY-MM-DD'), 'days') > 365;

    if (outdated) {
        return true;
    }

    // 未过期，移除提示框
    const element = document.getElementById('date-validate');
    if (element) {
        element.remove();
    }

    return false;
}

/**
 * 获取文章发布日期并判断是否过期
 */
function checkPostOutdated() {
    const timeElement = document.querySelector('.post-meta-item time');
    if (timeElement) {
        const dateText = timeElement.textContent.trim(); // 获取文本内容
        if (isOutdated(dateText)) {
            console.log('文章已过期:', dateText);
        } else {
            console.log('文章未过期:', dateText);
        }
    }
}

// 等待 DOM 加载完成后执行
document.addEventListener("DOMContentLoaded", checkPostOutdated);