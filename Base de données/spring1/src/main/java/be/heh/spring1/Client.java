package be.heh.spring1;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "client")
public class Client implements Serializable {

    private static final long serialVersionUID = -3009157732242241606L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "prenom")
    private String prenom;

    @Column(name = "nom")
    private String nom;

    protected Client() {
    }

    public Client(String prenom, String nom) {
        this.prenom = prenom;
        this.nom = nom;
    }

    @Override
    public String toString() {
        return String.format("Client[id=%d, prenom='%s', nom='%s']", id, prenom, nom);
    }
}