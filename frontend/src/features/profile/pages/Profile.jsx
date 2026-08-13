import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMe } from "../profileActions";

const Profile = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.profile);
  const { accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchMe());
    }
  }, [dispatch, accessToken]);

  if (loading) {
    return (
      <div style={styles.page}>
        <div style={styles.loadingCard}>
          <div style={styles.loader}></div>
          <p style={{ color: "#64748b", marginTop: "15px" }}>
            Loading your profile...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.page}>
        <div style={styles.errorCard}>
          <div style={styles.errorIcon}>!</div>
          <h3>Something went wrong</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  const initials = user.username
    ? user.username.substring(0, 2).toUpperCase()
    : "U";

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* Profile Header */}
        <div style={styles.headerCard}>
          <div style={styles.cover}></div>

          <div style={styles.headerContent}>
            <div style={styles.avatar}>{initials}</div>

            <div style={styles.heading}>
              <h1 style={styles.name}>{user.username}</h1>
              <p style={styles.email}>{user.email}</p>
            </div>

            <div style={styles.status}>
              <span style={styles.statusDot}></span>
              Active
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statIcon}>💎</div>
            <div>
              <strong style={styles.statNumber}>{user.credits}</strong>
              <span style={styles.statLabel}>Credits</span>
            </div>
          </div>

          <div style={styles.statCard}>
            <div style={styles.statIcon}>🌍</div>
            <div>
              <strong style={styles.statNumber}>
                {user.native_language}
              </strong>
              <span style={styles.statLabel}>Native Language</span>
            </div>
          </div>

          <div style={styles.statCard}>
            <div style={styles.statIcon}>📚</div>
            <div>
              <strong style={styles.statNumber}>
                {user.learning_languages?.length || 0}
              </strong>
              <span style={styles.statLabel}>Learning</span>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div style={styles.card}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionIcon}>👤</div>
            <div>
              <h2 style={styles.sectionTitle}>Personal Information</h2>
              <p style={styles.sectionSubtitle}>
                Your account details
              </p>
            </div>
          </div>

          <div style={styles.infoGrid}>
            <div style={styles.infoBox}>
              <span style={styles.label}>Username</span>
              <strong style={styles.value}>{user.username}</strong>
            </div>

            <div style={styles.infoBox}>
              <span style={styles.label}>Email</span>
              <strong style={styles.value}>{user.email}</strong>
            </div>

            <div style={styles.infoBox}>
              <span style={styles.label}>Native Language</span>
              <strong style={styles.value}>
                {user.native_language}
              </strong>
            </div>

            <div style={styles.infoBox}>
              <span style={styles.label}>Credits</span>
              <strong style={styles.value}>{user.credits}</strong>
            </div>
          </div>
        </div>

        {/* Learning Languages */}
        <div style={styles.card}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionIcon}>🎯</div>
            <div>
              <h2 style={styles.sectionTitle}>Learning Languages</h2>
              <p style={styles.sectionSubtitle}>
                Languages you're currently learning
              </p>
            </div>
          </div>

          <div style={styles.languages}>
            {user.learning_languages?.map((language) => (
              <div
                key={language.language}
                style={styles.languageCard}
              >
                <div style={styles.languageIcon}>
                  {language.language?.charAt(0).toUpperCase()}
                </div>

                <div style={{ flex: 1 }}>
                  <strong style={styles.languageName}>
                    {language.language}
                  </strong>

                  <span style={styles.languageLevelText}>
                    Current level
                  </span>
                </div>

                <span style={styles.levelBadge}>
                  {language.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "calc(100vh - 70px)",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "45px 20px",
    boxSizing: "border-box",
    background:
      "radial-gradient(circle at top left, rgba(99,102,241,.12), transparent 32%), radial-gradient(circle at bottom right, rgba(14,165,233,.10), transparent 32%), #f8fafc",
  },

  container: {
    width: "100%",
    maxWidth: "900px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  headerCard: {
    background: "rgba(255,255,255,.88)",
    border: "1px solid rgba(226,232,240,.8)",
    borderRadius: "22px",
    overflow: "hidden",
    boxShadow: "0 15px 40px rgba(15,23,42,.07)",
    backdropFilter: "blur(15px)",
  },

  cover: {
    height: "125px",
    background:
      "linear-gradient(135deg, #4f46e5, #6366f1 50%, #0ea5e9)",
  },

  headerContent: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "0 30px 25px",
  },

  avatar: {
    width: "88px",
    height: "88px",
    marginTop: "-44px",
    borderRadius: "22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg,#ffffff,#eef2ff)",
    color: "#4f46e5",
    fontSize: "28px",
    fontWeight: "800",
    border: "5px solid white",
    boxShadow: "0 8px 25px rgba(15,23,42,.15)",
    flexShrink: 0,
  },

  heading: {
    flex: 1,
    paddingTop: "15px",
  },

  name: {
    margin: "0 0 5px",
    fontSize: "26px",
    color: "#0f172a",
    fontWeight: "750",
  },

  email: {
    margin: 0,
    color: "#64748b",
    fontSize: "14px",
  },

  status: {
    marginTop: "15px",
    padding: "7px 12px",
    borderRadius: "30px",
    background: "#ecfdf5",
    color: "#059669",
    fontSize: "12px",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    gap: "7px",
  },

  statusDot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    background: "#10b981",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "15px",
  },

  statCard: {
    background: "rgba(255,255,255,.9)",
    border: "1px solid #e2e8f0",
    borderRadius: "17px",
    padding: "18px",
    display: "flex",
    alignItems: "center",
    gap: "13px",
    boxShadow: "0 7px 20px rgba(15,23,42,.04)",
  },

  statIcon: {
    width: "42px",
    height: "42px",
    borderRadius: "12px",
    background: "#eef2ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
  },

  statNumber: {
    display: "block",
    color: "#0f172a",
    fontSize: "17px",
    marginBottom: "3px",
  },

  statLabel: {
    display: "block",
    color: "#64748b",
    fontSize: "11px",
  },

  card: {
    background: "rgba(255,255,255,.9)",
    border: "1px solid #e2e8f0",
    borderRadius: "20px",
    padding: "26px",
    boxShadow: "0 10px 30px rgba(15,23,42,.05)",
  },

  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "22px",
  },

  sectionIcon: {
    width: "42px",
    height: "42px",
    borderRadius: "12px",
    background: "#eef2ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  sectionTitle: {
    margin: "0 0 3px",
    fontSize: "17px",
    color: "#0f172a",
  },

  sectionSubtitle: {
    margin: 0,
    fontSize: "12px",
    color: "#94a3b8",
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "13px",
  },

  infoBox: {
    padding: "16px",
    borderRadius: "13px",
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
  },

  label: {
    display: "block",
    fontSize: "10px",
    color: "#64748b",
    textTransform: "uppercase",
    letterSpacing: ".5px",
    marginBottom: "6px",
  },

  value: {
    fontSize: "14px",
    color: "#1e293b",
  },

  languages: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  languageCard: {
    display: "flex",
    alignItems: "center",
    padding: "15px",
    borderRadius: "14px",
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
  },

  languageIcon: {
    width: "43px",
    height: "43px",
    borderRadius: "12px",
    background: "#eef2ff",
    color: "#4f46e5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "800",
    marginRight: "13px",
  },

  languageName: {
    display: "block",
    fontSize: "14px",
    color: "#1e293b",
    marginBottom: "3px",
  },

  languageLevelText: {
    fontSize: "11px",
    color: "#94a3b8",
  },

  levelBadge: {
    padding: "7px 12px",
    borderRadius: "20px",
    background: "#eef2ff",
    color: "#4f46e5",
    fontSize: "11px",
    fontWeight: "700",
  },

  loadingCard: {
    width: "100%",
    maxWidth: "400px",
    padding: "50px",
    background: "white",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 15px 40px rgba(15,23,42,.08)",
  },

  loader: {
    width: "38px",
    height: "38px",
    margin: "0 auto",
    borderRadius: "50%",
    border: "4px solid #e2e8f0",
    borderTop: "4px solid #4f46e5",
    animation: "spin 0.8s linear infinite",
  },

  errorCard: {
    width: "100%",
    maxWidth: "400px",
    padding: "45px",
    background: "white",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 15px 40px rgba(15,23,42,.08)",
  },

  errorIcon: {
    width: "50px",
    height: "50px",
    margin: "0 auto 15px",
    borderRadius: "50%",
    background: "#fee2e2",
    color: "#dc2626",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "25px",
    fontWeight: "800",
  },
};

export default Profile;