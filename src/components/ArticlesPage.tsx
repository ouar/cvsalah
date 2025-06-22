const ArticlesPage = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto ">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        🛠️ Commandes Shell Essentielles pour DevOps
      </h1>
      <div className="space-y-10">

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Commandes de base</h2>
          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 text-sm space-y-1 whitespace-pre-wrap break-words">
            <code className="block">ls -la             # Lister les fichiers avec détails</code>
            <code className="block">cd /chemin         # Changer de répertoire</code>
            <code className="block">pwd                # Afficher le chemin actuel</code>
            <code className="block">touch fichier      # Créer un fichier</code>
            <code className="block">mkdir dossier      # Créer un dossier</code>
            <code className="block">rm fichier         # Supprimer un fichier</code>
            <code className="block">rm -r dossier      # Supprimer un dossier récursivement</code>
            <code className="block">mv src dst         # Déplacer ou renommer</code>
            <code className="block">cp src dst         # Copier un fichier ou dossier</code>
            <code className="block">cat fichier        # Lire un fichier</code>
            <code className="block">less fichier       # Lire avec navigation</code>
            <code className="block">echo "text"        # Afficher du texte</code>
            <code className="block">go build -o nom_du_binaire chemin_vers_main.go</code>
            <code className="block">which nom_du_binaire        # Vérifier que le binaire est accessible</code>
            <code className="block">./nom_du_binaire            # Lancer le programme</code>
          </pre>
        </section>

        {/* Section 2 */}
        <section className="space-y-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. Permissions et utilisateurs</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md text-sm space-y-1 whitespace-pre-wrap break-words">
            <code className="block">chmod +x fichier              # Rendre exécutable</code>
            <code className="block">chown user:group fichier     # Changer le propriétaire</code>
            <code className="block">whoami                       # Utilisateur courant</code>
            <code className="block">id                           # Infos sur les groupes</code>
            <code className="block">sudo chown ubuntu:ubuntu reset-k8s.sh</code>
            <code className="block">chmod 775 reset-k8s.sh</code>
          </pre>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. Réseau</h2>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md text-sm space-y-1 whitespace-pre-wrap break-words">
            <code className="block">ip a / ifconfig         # Interfaces réseau</code>
            <code className="block">ping google.com         # Vérifier la connectivité</code>
            <code className="block">curl http://site.com    # Tester une URL</code>
            <code className="block">wget url                # Télécharger</code>
            <code className="block">netstat -tuln           # Ports TCP/UDP ouverts</code>
            <code className="block">ss -tuln                # Sockets ouverts</code>
            <code className="block">lsof -i -P -n           # Processus liés aux ports</code>
            <code className="block">ufw status              # État du pare-feu</code>
            <code className="block">ufw allow 8080/tcp      # Ouvrir le port 8080</code>
            <code className="block">ufw deny 22             # Fermer le port 22</code>
            <code className="block">ufw delete allow 8080   # Supprimer la règle</code>
            <code className="block">iptables -L</code>
            <code className="block">iptables -A INPUT -p tcp --dport 3000 -j ACCEPT</code>
            <code className="block">iptables -A INPUT -p tcp --dport 3000 -j DROP</code>
          </pre>
          <p className="text-orange-600 font-semibold mt-2">
            ⚠️ Manipuler les ports impacte la sécurité du serveur. Toujours tester sur un environnement de test !
          </p>
        </section>
        
      </div>
    </div>
  );
};

export default ArticlesPage;
