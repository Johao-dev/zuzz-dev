function ThemeToggle() {
    return (
        <div>
            <input type="checkbox" id="theme-toggle" />
            <label htmlFor="theme-toggle">
                <span className="toggle-icon">🌞</span>
                <span className="toggle-icon">🌜</span>
            </label>
        </div>
    );
}

export default ThemeToggle;