package be.heh.spring1.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="room")
public class Room implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;

    @Column(name="material")
    private String material;

    protected Room(){}

    public Room(String material){
        this.material=material;
    }

    public long getId(){
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getMaterial(){
        return material;
    }

    public void setMaterial(String material){
        this.material=material;
    }

    @Override
    public String toString(){
        return String.format("Room[id=%d, material='%s'");
    }
}
